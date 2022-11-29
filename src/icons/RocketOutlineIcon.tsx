import React, { FC, memo } from 'react';
import RocketOutlineSvg from '../svg/rocket-outline.svg';

export interface IRocketOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RocketOutlineIcon: FC<IRocketOutlineIconProps> = memo(props => {
  return <RocketOutlineSvg {...props} />;
});
