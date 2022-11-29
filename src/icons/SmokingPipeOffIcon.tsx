import React, { FC, memo } from 'react';
import SmokingPipeOffSvg from '../svg/smoking-pipe-off.svg';

export interface ISmokingPipeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokingPipeOffIcon: FC<ISmokingPipeOffIconProps> = memo(props => {
  return <SmokingPipeOffSvg {...props} />;
});
