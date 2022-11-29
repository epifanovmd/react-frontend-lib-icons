import React, { FC, memo } from 'react';
import SharkFinOutlineSvg from '../svg/shark-fin-outline.svg';

export interface ISharkFinOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SharkFinOutlineIcon: FC<ISharkFinOutlineIconProps> = memo(props => {
  return <SharkFinOutlineSvg {...props} />;
});
