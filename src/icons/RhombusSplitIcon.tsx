import React, { FC, memo } from 'react';
import RhombusSplitSvg from '../svg/rhombus-split.svg';

export interface IRhombusSplitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RhombusSplitIcon: FC<IRhombusSplitIconProps> = memo(props => {
  return <RhombusSplitSvg {...props} />;
});
