import React, { FC, memo } from 'react';
import HandcuffsSvg from '../svg/handcuffs.svg';

export interface IHandcuffsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandcuffsIcon: FC<IHandcuffsIconProps> = memo(props => {
  return <HandcuffsSvg {...props} />;
});
