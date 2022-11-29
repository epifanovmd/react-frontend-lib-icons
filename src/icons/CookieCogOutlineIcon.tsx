import React, { FC, memo } from 'react';
import CookieCogOutlineSvg from '../svg/cookie-cog-outline.svg';

export interface ICookieCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieCogOutlineIcon: FC<ICookieCogOutlineIconProps> = memo(props => {
  return <CookieCogOutlineSvg {...props} />;
});
