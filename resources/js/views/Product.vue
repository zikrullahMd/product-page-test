<template>
    <div class="container">
        <div v-if="loading">
            <div class="loading"></div>
        </div>
        <div v-else class="product-main-container">
            <div class="product-image-container">
                <div class="image-main">
                    <img
                        class="product-image"
                        :src="selectedImage"
                        alt="product-image"
                    />
                </div>
                <div class="image-options">
                    <div
                        v-for="(image, index) in productDetails?.images"
                        :key="index"
                        @click="selectImage(index)"
                        :class="[
                            index === selectedImageIndex ? 'selected' : '',
                            'subImage',
                        ]"
                    >
                        <img :src="image" alt="product-image" />
                        <div class="gradient"></div>
                    </div>
                </div>
            </div>
            <div class="product-detail-container">
                <div class="details">
                    <h2>{{ productDetails?.name }}</h2>
                    <p class="description">{{ productDetails?.description }}</p>
                    <div class="price-detail">
                        <div class="price-container">
                            <p class="price">
                                {{ `$${productDetails?.price?.discounted}.00` }}
                            </p>
                        </div>
                        <div class="discount">
                            <span>{{
                                `${productDetails?.discount?.amount}%`
                            }}</span>
                        </div>
                    </div>
                    <p class="full-price">
                        {{ `$${productDetails?.price?.full}.00` }}
                    </p>
                </div>
                <div class="action-buttons">
                    <div class="counter-button">
                        <span
                            class="product-quantity-button"
                            @click="decrementQuantity"
                            ><svg
                                width="12"
                                height="4"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs>
                                    <path
                                        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                                        id="a"
                                    />
                                </defs>
                                <use
                                    fill="#FF7E1B"
                                    fill-rule="nonzero"
                                    xlink:href="#a"
                                /></svg
                        ></span>
                        <span>{{ productQuantity }}</span>
                        <span
                            class="product-quantity-button"
                            @click="incrementQuantity"
                            ><svg
                                width="12"
                                height="12"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs>
                                    <path
                                        d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                                        id="b"
                                    />
                                </defs>
                                <use
                                    fill="#FF7E1B"
                                    fill-rule="nonzero"
                                    xlink:href="#b"
                                /></svg
                        ></span>
                    </div>
                    <div class="cart-button" @click="onAddToCartClick">
                        <svg
                            width="22"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="white"
                                fill-rule="nonzero"
                            /></svg
                        ><span>Add to cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";

let productDetails = ref({});
let productQuantity = ref(0);
let selectedImage = ref(null);
let selectedImageIndex = ref(0);
let loading = ref(true);

onBeforeMount(async () => {
    const response = await fetch(
        "http://localhost:8000/client/products/fall-limited-edition-sneakers"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch product details");
    }
    loading.value = false;
    const data = await response.json();
    productDetails.value = data.data;
    selectedImage.value = productDetails.value.images[0];
});

const incrementQuantity = () => {
    productQuantity.value++;
};

const decrementQuantity = () => {
    if (productQuantity.value > 0) {
        productQuantity.value--;
    }
};

const selectImage = (index) => {
    selectedImage.value = productDetails.value.images[index];
    selectedImageIndex.value = index;
    console.log(selectedImage.value);
};

const onAddToCartClick = () => {
    if (productQuantity.value === 0) {
        incrementQuantity();
    }
};
</script>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.product-main-container {
    height: 70%;
    width: 60%;
    display: flex;
    gap: 100px;
}
.product-image-container {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.product-detail-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 74%;
    justify-content: space-between;
}

.product-detail-container h2 {
    font-size: 50px;
    color: hsl(220, 13%, 13%);
}
.details .description {
    font-size: 16px;
    color: hsl(219, 9%, 45%);
    line-height: 2;
    text-align: justify;
}
.price-detail {
    display: flex;
    margin-top: 50px;
    gap: 20px;
    align-items: center;
    height: 40px;
}
.price-detail .price {
    font-size: 30px;
    font-weight: bold;
    color: hsl(220, 13%, 13%);
}
.price-detail .discount {
    display: flex;
    align-items: center;
}
.full-price {
    color: hsl(220, 14%, 75%);
    text-decoration: line-through;
    font-size: 20px;
}
.discount span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    padding: 3px;
    border-radius: 5px;
    font-weight: bolder;
    color: hsl(26, 100%, 55%);
    background-color: hsl(25, 100%, 94%);
}
.action-buttons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

.counter-button,
.cart-button {
    flex: 1 1 200px;
    margin-bottom: 10px;
}

.counter-button {
    display: flex;
    flex: 1.5;
    height: 50px;
    align-items: center;
    justify-content: space-around;
    background-color: #f7f8fd;
    border-radius: 10px;
}

.cart-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    height: 52px;
    background-color: hsl(26, 100%, 55%);
    color: white;
    font-weight: bold;
    cursor: pointer;
}
.cart-button svg {
    color: white;
}

.product-quantity-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    font-size: 24px;
}

@media (max-width: 600px) {
    .action-buttons {
        flex-direction: column;
        align-items: center;
    }

    .counter-button,
    .cart-button {
        flex: 1 1 100%;
        max-width: 100%;
    }
}
.image-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.image-main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    flex: 2;
}

.image-main img {
    border-radius: 20px;
    max-width: 100%;
    height: auto;
}

.image-options {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    flex: 1;
}

.image-options img {
    height: 100px;
    width: 100px;
    border-radius: 20px;
}

.subImage {
    display: flex;
    position: relative;
    cursor: pointer;
}

.selected {
    border-radius: 21px;
    border: 2px solid hsl(26, 100%, 55%);
}

.gradient {
    position: absolute;
    background: hsla(0, 0%, 0%, 0.75);
    top: 0;
    left: 0;
    height: 100px;
    width: 100px;
    border-radius: 20px;
    opacity: 0;
}

.selected .gradient {
    opacity: 0.75;
}

.subImage:hover .gradient {
    opacity: 0.75;
}

.product-image {
    max-height: 500px;
    max-width: 100%;
    height: auto;
}

.loading {
    height: 120px;
    width: 120px;
    border: 6px solid;
    border-color: hsl(26, 100%, 55%) transparent hsl(26, 100%, 55%) transparent;
    border-radius: 50%;
    animation: loading 1.3s ease infinite;
}

@keyframes loading {
    to {
        transform: rotate(360deg);
    }
}

@media (max-width: 768px) {
    .image-main {
        flex-direction: column;
        align-items: center;
    }

    .image-options {
        justify-content: space-evenly;
    }

    .image-options img {
        height: 80px;
        width: 80px;
    }
}
@media (max-width: 890px) {
    .product-main-container {
        flex-direction: column;
    }
    .image-options {
        justify-content: space-evenly;
    }
}
</style>
