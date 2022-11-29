import React, { FC, memo } from 'react';
import FloppySvg from '../svg/floppy.svg';

export interface IFloppyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloppyIcon: FC<IFloppyIconProps> = memo(props => {
  return <FloppySvg {...props} />;
});
