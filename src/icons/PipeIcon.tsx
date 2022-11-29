import React, { FC, memo } from 'react';
import PipeSvg from '../svg/pipe.svg';

export interface IPipeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PipeIcon: FC<IPipeIconProps> = memo(props => {
  return <PipeSvg {...props} />;
});
