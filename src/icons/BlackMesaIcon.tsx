import React, { FC, memo } from 'react';
import BlackMesaSvg from '../svg/black-mesa.svg';

export interface IBlackMesaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlackMesaIcon: FC<IBlackMesaIconProps> = memo(props => {
  return <BlackMesaSvg {...props} />;
});
