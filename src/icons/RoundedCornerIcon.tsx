import React, { FC, memo } from 'react';
import RoundedCornerSvg from '../svg/rounded-corner.svg';

export interface IRoundedCornerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RoundedCornerIcon: FC<IRoundedCornerIconProps> = memo(props => {
  return <RoundedCornerSvg {...props} />;
});
