import React, { FC, memo } from 'react';
import BullhornOutlineSvg from '../svg/bullhorn-outline.svg';

export interface IBullhornOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BullhornOutlineIcon: FC<IBullhornOutlineIconProps> = memo(props => {
  return <BullhornOutlineSvg {...props} />;
});
