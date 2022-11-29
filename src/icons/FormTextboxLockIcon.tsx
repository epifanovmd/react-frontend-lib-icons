import React, { FC, memo } from 'react';
import FormTextboxLockSvg from '../svg/form-textbox-lock.svg';

export interface IFormTextboxLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormTextboxLockIcon: FC<IFormTextboxLockIconProps> = memo(props => {
  return <FormTextboxLockSvg {...props} />;
});
