import React, { FC, memo } from 'react';
import FormTextareaSvg from '../svg/form-textarea.svg';

export interface IFormTextareaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormTextareaIcon: FC<IFormTextareaIconProps> = memo(props => {
  return <FormTextareaSvg {...props} />;
});
