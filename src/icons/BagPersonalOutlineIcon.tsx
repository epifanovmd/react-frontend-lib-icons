import React, { FC, memo } from 'react';
import BagPersonalOutlineSvg from '../svg/bag-personal-outline.svg';

export interface IBagPersonalOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagPersonalOutlineIcon: FC<IBagPersonalOutlineIconProps> = memo(props => {
  return <BagPersonalOutlineSvg {...props} />;
});
