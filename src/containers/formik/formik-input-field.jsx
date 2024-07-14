import BasicInput from '@/components/forms/basic-input-component';
import { Field } from 'formik';
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export default function FormikInputField({ type, ...props }) {
    const [showPassword, setShowPassword] = useState(false);
    const inputClassNames = 'w-full flex items-center relative h-[58px] ';

    return (
        <Field name={props.name}>
            {({ field, meta, form }) => (
                <div className={`${inputClassNames}`}>
                    <BasicInput
                        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                        {...field}
                        {...props}
                        name={props.name}
                        label={props.label}
                        className="flex-1 outline-none text-sm tracking-wider  "
                    />
                    {type === 'password' &&
                        <div className="absolute right-3 ">
                            {
                                showPassword ? (
                                    <AiOutlineEyeInvisible
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="cursor-pointer"
                                        size={15}
                                    />
                                ) : (
                                    <AiOutlineEye
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="cursor-pointer"
                                        size={15}
                                    />
                                )
                            }
                        </div>
                    }
                </div>
            )}
        </Field>
    );
}
