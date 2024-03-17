<script setup>
    import { computed } from 'vue';
    import {Placeholder, Bank, Crown, Logout, Google, Message, User, DatePicker, Dollar, Filter, Writing, ArrowLeftIcon,
        Trash, EllipsisHorizontalIcon, Edit, UpDownIcon, Add, Download, Close, File, Warning, Check, Info} from "@/components/Icons/Index";

    const icons = {
        bank: Bank,
        crown: Crown,
        logout: Logout,
        google: Google,
        message: Message,
        user: User,
        datepicker: DatePicker,
        dollar: Dollar,
        filter: Filter,
        writing: Writing,
        arrowLeftIcon: ArrowLeftIcon,
        trash: Trash,
        ellipsisHorizontalIcon: EllipsisHorizontalIcon,
        edit: Edit,
        upDownIcon: UpDownIcon,
        add: Add,
        download: Download,
        close: Close,
        file: File,
        warning: Warning,
        info: Info,
        check: Check,
        placeholder: Placeholder
    };

    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        className:{
            type:String,
            default: 'none'
        },
        fill:{
            type: String
        },
        stroke: {
            type: String,
            default: 'black'
        },
        thin: {
            type: Boolean,
            default: false
        }
    });

    console.log(props.thin, 'thin')

    const iconComponent = computed(() => {
        return icons[props.name];
    });

</script>
<template>
    <component :is="iconComponent" class="inline-block" :fill="fill || 'none'" :stroke="stroke" :thin="thin"></component>
</template>

