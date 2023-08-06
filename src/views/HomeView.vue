<template>
  <div class="d-flex justify-content-between mb-3">
    <h2 class="m-0">Contact List</h2>
    <RouterLink v-if="auth.isAuthenticate" to="/contacts/create" class="btn btn-success fw-bold">New</RouterLink>
  </div>
  <div v-if="contacts?.length">
    <div class="row">
      <div v-for="contact in contacts" :key="contact.id" class="col-lg-4 mb-4">
        <CardContact :info="contact" v-on:delete="deleted" />
      </div>
    </div>
  </div>
  <div v-else class="alert alert-info mt-4 fs-5">
    There are no registered contacts.
  </div>
  <Modal v-if="isModalVisible" @close="closeModal">
    <template v-slot:header>
      Are you sure?
    </template>

    <template v-slot:body>
      It will not be possible to undo this action.
    </template>

    <template v-slot:footer>
      <button class="btn btn-danger" @click="remove">Delete</button>
    </template>
  </Modal>
</template>

<script>
import { auth } from '@/auth'
import storageMixin from '@/storageMixin'
import Modal from '@/components/Modal.vue'
import CardContact from '@/components/CardContact.vue'

export default {
  name: 'HomeView',
  mixins: [storageMixin],
  data() {
    return {
      id: null,
      contacts: [],
      isModalVisible: false,
    }
  },
  setup() {
    return { auth }
  },
  mounted() {
    this.contacts = this.getItems();
  },
  methods: {
    deleted(id) {
      this.showModal()
      this.id = id
    },
    remove() {
      this.removeItem(this.id);
      this.isModalVisible = false;
      this.contacts = this.getItems();
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  components: {
    CardContact,
    Modal
  }
}
</script>
