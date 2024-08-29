<template>
    <section>
        <form>
            <h3>A;adir Role</h3>
            <div><label>Nombre de usuario</label><input type="text" v-model="role.role_name"/></div>
        </form>
    </section>

    <section>
        <h3>Listado de roles</h3>
    </section>

</template>

<script lang="ts" setup>
import { defineComponent, Ref, ref } from 'vue';

interface iRole {
    role_name: string
}

let role: Ref<iRole> = ref ({
    role_name: ''
})


</script>

<style scoped>
</style>