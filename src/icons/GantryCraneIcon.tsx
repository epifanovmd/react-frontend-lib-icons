import React, { FC, memo } from 'react';
import GantryCraneSvg from '../svg/gantry-crane.svg';

export interface IGantryCraneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GantryCraneIcon: FC<IGantryCraneIconProps> = memo(props => {
  return <GantryCraneSvg {...props} />;
});
