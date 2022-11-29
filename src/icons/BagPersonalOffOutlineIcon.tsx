import React, { FC, memo } from 'react';
import BagPersonalOffOutlineSvg from '../svg/bag-personal-off-outline.svg';

export interface IBagPersonalOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagPersonalOffOutlineIcon: FC<IBagPersonalOffOutlineIconProps> = memo(props => {
  return <BagPersonalOffOutlineSvg {...props} />;
});
