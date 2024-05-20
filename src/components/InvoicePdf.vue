<script setup>
    import jsPDF from 'jspdf';
    import 'jspdf-autotable';
    import moment from 'moment';
    import { computed, defineProps, defineEmits } from 'vue';
    import { handleSendMail } from './helper';
    // import RazorpayPayment from '../components/RazorpayPayment.vue';

    const props = defineProps({
        orderDetails:{
            type:Object,
            required: true
        }
    });
    
    const emits = defineEmits(['orderSend']);
    const address = computed(() => {
       return '595 Tomlinson Rd, Philadelphia, PA 19116';
        // return {
        //     1: "10080 Sandmeyer Ln Philadelphia, PA 19116",
        //     2: "American Heritage Credit Union 2068 Red Lion Rd, Philadelphia, PA 19115",
        // }[props.orderDetails?.branch?.id];
    });
    
    const printInvoice = async () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'in',
            format: [4, 6], // Width and height in inches
        });
        
        const customer = props.orderDetails?.customer;
        doc.setFontSize(15);
        doc.setFillColor(204, 204,204,0);
        doc.rect(0, 0, 4, 0.6, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        // doc.text('Your Order', getXWidth('Your Order',doc), 0.3);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(13);
        doc.setTextColor(192, 192, 192);
        doc.text(moment().format('dddd, MMMM Do YYYY, h a'), getXWidth(moment().format('dddd, MMMM Do YYYY, h a'),doc), 0.4);

        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold");
        doc.setFillColor(248, 226,213);
        doc.rect(0, 0.6, 4, 0.4, "F");
        doc.text(`William Loesche Elementary School`, getXWidth('William Loesche Elementary School',doc), 0.8);

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(`Name    : ${customer.name}`, 0.1, 1.2);
        doc.text(`Email   : ${customer.email}`, 0.1, 1.4);
        doc.text(`Phone Number : ${customer.contact}`, 0.1, 1.6);
        doc.text(`branch : ${props.orderDetails?.branch?.name}`, 0.1, 1.8);
        doc.text(`Address:  ${address.value}`, 0.1, 2,{
            maxWidth:4
        });
        let height = props.orderDetails?.branch?.id === 1 ? 2.2 : 2.4;
        doc.text(`Delivery Time:  ${props.orderDetails?.deliveryTime}`, 0.1, height);

        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold");
        doc.setFillColor(248, 226,213);
        height+=0.2;
        doc.rect(0, height, 4, 0.4, "F");
        height+=0.2;
        doc.text(`Order Details`, getXWidth('Order Details',doc), height);
        
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        height+=0.4;
        doc.text(`* ${props.orderDetails?.food?.name} ${ !!props.orderDetails?.food?.price ? props.orderDetails?.food?.price : ''}`, 0.1, height);
        height+=0.2;
        doc.text(`* ${props.orderDetails?.foodCategory?.name}`, 0.1, height);

        height+=0.2;
        if (!!props.orderDetails?.categoryItem?.name){
            doc.text(`* ${props.orderDetails?.categoryItem?.name} ${ !!props.orderDetails?.categoryItem?.des && (props.orderDetails?.categoryItem?.des)}`, 0.1, height);
            height += 0.2;
        }

        doc.text(`* ${props.orderDetails?.categoryItems?.name} ${ !!props.orderDetails?.categoryItems?.des && (props.orderDetails?.categoryItems?.des)}`, 0.1, height);

        height += 0.2;
        if (props.orderDetails?.chips?.name){
            doc.text(`* ${props.orderDetails?.chips?.name} ${ !!props.orderDetails?.chips?.ounces && (props.orderDetails?.chips?.ounces)}`, 0.1, height);
            height += 0.2;
        }
        doc.text(`* ${props.orderDetails?.drink?.name} ${ !!props.orderDetails?.drink?.ounces && (props.orderDetails?.drink?.ounces)}`, 0.1, height);
        height += 0.2;
        doc.text(`* ${props.orderDetails?.sauces?.name} ${ !!props.orderDetails?.sauces?.des && (props.orderDetails?.sauces?.des)}`, 0.1, height);

        if (!!props.orderDetails?.toasted?.name){
            height += 0.2;
            doc.text(`* ${props.orderDetails?.toasted?.name}`, 0.1, height);
        }
        
        props.orderDetails?.veggies.forEach(item => {
            height+= 0.2;
            doc.text(`* ${item.name} ${item.variant} ${item.des}`, 0.1, height);
        });
        height+= 0.2;
        doc.text(`Your payable amount is ${props.orderDetails?.food?.price}`, 0.1, height);

    height+=0.2;
        doc.text('contact us 23734subway@gmail.com', 0.1, height);

        // props.orderDetails.food.price
        // doc.autoPrint();
        doc.setFillColor(204, 204,204,0);
        doc.rect(0, 5.6, 4, 0.5, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.text('Thank you for your order.', getXWidth('Thank you for your order',doc), 5.9);
        
        let pdfData = doc.output();
        if (!!customer.email?.length){
            await handleSendMail(customer.email,'Order Details','Thank you for ordering here is pdf to download and get details of your orders',pdfData);
            setTimeout(() => {
                emits('orderSend');
            },2000)
        }
    };
    
    const getXWidth = (text,doc) => {
        const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const pageWidth = doc.internal.pageSize.getWidth();
        const xSide = (pageWidth - textWidth) / 2;
        return xSide;
    }
</script>
<template>
    <div>
        <button
                @click="printInvoice" class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none z-50">
            Cash On delivery
        </button>
    </div>
</template>
