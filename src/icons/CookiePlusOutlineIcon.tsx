import React, { FC, memo } from 'react';
import CookiePlusOutlineSvg from '../svg/cookie-plus-outline.svg';

export interface ICookiePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookiePlusOutlineIcon: FC<ICookiePlusOutlineIconProps> = memo(props => {
  return <CookiePlusOutlineSvg {...props} />;
});
