import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [active, setActive] = useState(false);
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        if (data?.save) {
            const { save, ...rest } = data;
            fetch('http://localhost:5000/userProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rest)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        toast.success('Your information is saved on database successfully')
                        reset()
                        setActive(true)
                    }
                })
        }

        if (data?.update) {
            const { update, ...rest } = data;
            fetch(`http://localhost:5000/userProfile/${data.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rest)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged) {
                        toast.success('Your information is update successfully')
                        reset()
                    }
                })
        }
    }

    return (
        <div className='ml-[20px] mb-[60px]'>
            <div>
                <h1 className="text-2xl text-primary">My Profile</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register('name')} type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email')} type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education qualification</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter education qualification'
                            className="input input-bordered w-full max-w-xs"
                            {...register('education', {
                                required: {
                                    value: true,
                                    message: 'Education qualification is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Your location (city/district)</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter your city/district name'
                            className="input input-bordered w-full max-w-xs"
                            {...register('city', {
                                required: {
                                    value: true,
                                    message: 'City name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter your phone number'
                            className="input input-bordered w-full max-w-xs"
                            {...register('phone', {
                                required: {
                                    value: true,
                                    message: 'Phone number is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">LinkedIn profile link</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter linkedIn link'
                            className="input input-bordered w-full max-w-xs"
                            {...register('linkedIn', {
                                required: {
                                    value: true,
                                    message: 'LinkedIn profile link is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedIn.message}</span>}
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        {active === false && <input {...register('save')} className='btn w-full mb-[15px] max-w-xs text-white' type="submit" value='SAVE' />}
                        {active && <input {...register('update')} className='btn w-full max-w-xs text-white' type="submit" value='UPDATE' />}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;