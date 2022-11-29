import React, { FC, memo } from 'react';
import SmokingPipeSvg from '../svg/smoking-pipe.svg';

export interface ISmokingPipeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokingPipeIcon: FC<ISmokingPipeIconProps> = memo(props => {
  return <SmokingPipeSvg {...props} />;
});
