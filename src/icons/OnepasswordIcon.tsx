import React, { FC, memo } from 'react';
import OnepasswordSvg from '../svg/onepassword.svg';

export interface IOnepasswordIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OnepasswordIcon: FC<IOnepasswordIconProps> = memo(props => {
  return <OnepasswordSvg {...props} />;
});
