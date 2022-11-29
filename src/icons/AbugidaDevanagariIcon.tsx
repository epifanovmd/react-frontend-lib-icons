import React, { FC, memo } from 'react';
import AbugidaDevanagariSvg from '../svg/abugida-devanagari.svg';

export interface IAbugidaDevanagariIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AbugidaDevanagariIcon: FC<IAbugidaDevanagariIconProps> = memo(props => {
  return <AbugidaDevanagariSvg {...props} />;
});
