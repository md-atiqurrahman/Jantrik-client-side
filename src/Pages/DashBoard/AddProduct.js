import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'ac149ecf14780c3fc166bfce6733dc79';

    const onSubmit = async (data) =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success === true){
                const img = result.data.url;

                const newProduct = {
                    name: data.name,
                    image: img,
                    price: data.price,
                    available: data.available,
                    minimum: data.minimum,
                    description: data.description,
                }

                

                fetch('https://jantrik-server-side.up.railway.app/addProduct', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(newProduct)

                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success('Product added successfully');
                        reset();
                    }
                    else{
                        toast.error('Failed to added the product')
                    }
                })

            }
        })
    }

    return (
        <div className='ml-[20px] mb-[60px]'>
            <div>
                <h1 className="text-2xl text-primary">Add A Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter product name'
                            className="input input-bordered w-full max-w-xs"
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Product name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Product image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register('image', {
                                required: {
                                    value: true,
                                    message: 'Product image is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Product unit price $</span>
                        </label>
                        <input
                            type="number"
                            placeholder='Enter product unit price'
                            className="input input-bordered w-full max-w-xs"
                            {...register('price', {
                                required: {
                                    value: true,
                                    message: 'Product unit price is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Available product(pieces)</span>
                        </label>
                        <input
                            type="number"
                            placeholder='Enter available product(pieces)'
                            className="input input-bordered w-full max-w-xs"
                            {...register('available', {
                                required: {
                                    value: true,
                                    message: 'Available product(pieces) is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Minimum order quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder='Enter minimum order quantity'
                            className="overscroll-none input input-bordered w-full max-w-xs"
                            {...register('minimum', {
                                required: {
                                    value: true,
                                    message: 'Minimum order quantity is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.minimum?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder='write here...'
                            className="textarea textarea-bordered h-24 w-full max-w-xs"
                            {...register('description',
                             {
                                required: {
                                    value: true,
                                    message: 'Product description is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs text-white' type="submit" value='ADD PRODUCT' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;