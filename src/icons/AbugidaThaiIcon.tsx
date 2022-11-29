import React, { FC, memo } from 'react';
import AbugidaThaiSvg from '../svg/abugida-thai.svg';

export interface IAbugidaThaiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AbugidaThaiIcon: FC<IAbugidaThaiIconProps> = memo(props => {
  return <AbugidaThaiSvg {...props} />;
});
