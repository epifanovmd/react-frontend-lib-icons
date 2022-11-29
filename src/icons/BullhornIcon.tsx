import React, { FC, memo } from 'react';
import BullhornSvg from '../svg/bullhorn.svg';

export interface IBullhornIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BullhornIcon: FC<IBullhornIconProps> = memo(props => {
  return <BullhornSvg {...props} />;
});
