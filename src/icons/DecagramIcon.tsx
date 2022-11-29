import React, { FC, memo } from 'react';
import DecagramSvg from '../svg/decagram.svg';

export interface IDecagramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DecagramIcon: FC<IDecagramIconProps> = memo(props => {
  return <DecagramSvg {...props} />;
});
