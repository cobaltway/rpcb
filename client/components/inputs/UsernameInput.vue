<template>
  <b-field :label="$t('PSEUDO')" :type="type" :message="message" horizontal>
    <b-input :placeholder="$t('MY_GREAT_USERNAME')" icon="account" :value="value" @input="onInput" :required="required"/>
  </b-field>
</template>

<script>
  import debounce from 'debounce';
  import Request from '../../mixins/Request';

  export default {
    mixins: [Request()],
    props: ['value', 'required', 'valid'],
    data() {
      return { initial: true };
    },
    computed: {
      type() {
        if (this.initial) return '';
        if (this.loading) return 'is-loading';
        if (this.valid) return 'is-success';
        if (this.value) return 'is-danger';
      },
      message() {
        if (!this.value || this.loading || this.initial) return '&nbsp;';
        if (this.valid) return this.$t('ITS_AVAILIBLE');
        return this.$t('ITS_ALREADY_TAKEN');
      }
    },
    methods: {
      onInput(value) {
        this.$emit('input', value);
        this.checkValidity();
      }
    },
    mounted() {
      this.checkValidity = debounce(async function () {
        this.initial = false;
        if (!this.value) return;
        this.$emit('update:valid', this.value && (await this.doRequest(() => this.$axios.$get(`/me/check/name?name=${this.value}`))).availible);
      }, 500);
    }
  };
</script>
