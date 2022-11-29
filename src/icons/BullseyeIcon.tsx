import React, { FC, memo } from 'react';
import BullseyeSvg from '../svg/bullseye.svg';

export interface IBullseyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BullseyeIcon: FC<IBullseyeIconProps> = memo(props => {
  return <BullseyeSvg {...props} />;
});
