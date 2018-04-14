<template>
    <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label"> {{ name }} </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control has-icons-left">
                    <input class="input" :type="type || 'text'" :placeholder="placeholder"
                        :value="value"
                        @input="$emit('input', $event.target.value)">
                    <span class="icon is-small is-left">
                        <slot></slot>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default { props: ['value', 'name', 'placeholder', 'type'] };
</script>
