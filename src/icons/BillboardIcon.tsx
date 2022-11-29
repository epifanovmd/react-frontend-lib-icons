import React, { FC, memo } from 'react';
import BillboardSvg from '../svg/billboard.svg';

export interface IBillboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BillboardIcon: FC<IBillboardIconProps> = memo(props => {
  return <BillboardSvg {...props} />;
});
