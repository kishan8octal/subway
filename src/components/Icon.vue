<script setup>
    import { computed } from 'vue';
    import {
        Placeholder, Bank, Crown, Logout, Google, Message, User, DatePicker, Dollar, Filter, Writing, ArrowLeftIcon,
        Trash, EllipsisHorizontalIcon, Edit, UpDownIcon, Add, Download, Close, File, Warning, Check, Info, Search , 
        Notifications , Settings,Menu,ArrowUp,ArrowDown,ArrowRight,ChevronUp,ChevronDown,ChevronLeft,ChevronRight,
        FileCheck,Loader,Alert
    } from "../components/Icons/Index";

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
        placeholder: Placeholder,
        search: Search,
        notifications : Notifications,
        settings : Settings,
        menu : Menu,
        arrowup : ArrowUp,
        arrowDown : ArrowDown,
        arrowRight : ArrowRight,
        chevronUp : ChevronUp,
        chevronDown : ChevronDown,
        chevronLeft : ChevronLeft,
        chevronRight : ChevronRight,
        fileCheck : FileCheck,
        loader : Loader,
        alert : Alert,
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
        },
        size: {
            type: String, //large | medium | small
            default: 'medium'
        }
    });

    const iconComponent = computed(() => {
        return icons[props.name];
    });

    const sizeMeasure = computed(() => {
        switch (props.size) {
            case 'large' :
                return '20';
            case 'medium' :
                return '16';
            case 'small' :
                return '12'
        }
    })

</script>
<template>
    <component :is="iconComponent" class="inline-block" :fill="fill || 'none'" :stroke="stroke" :thin="thin" :size="sizeMeasure"></component>
</template>

