import React, { FC, memo } from 'react';
import WrenchOutlineSvg from '../svg/wrench-outline.svg';

export interface IWrenchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WrenchOutlineIcon: FC<IWrenchOutlineIconProps> = memo(props => {
  return <WrenchOutlineSvg {...props} />;
});
