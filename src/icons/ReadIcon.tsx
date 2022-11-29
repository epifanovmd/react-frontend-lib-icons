import React, { FC, memo } from 'react';
import ReadSvg from '../svg/read.svg';

export interface IReadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReadIcon: FC<IReadIconProps> = memo(props => {
  return <ReadSvg {...props} />;
});
