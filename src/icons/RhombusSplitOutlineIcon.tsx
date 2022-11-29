import React, { FC, memo } from 'react';
import RhombusSplitOutlineSvg from '../svg/rhombus-split-outline.svg';

export interface IRhombusSplitOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RhombusSplitOutlineIcon: FC<IRhombusSplitOutlineIconProps> = memo(props => {
  return <RhombusSplitOutlineSvg {...props} />;
});
