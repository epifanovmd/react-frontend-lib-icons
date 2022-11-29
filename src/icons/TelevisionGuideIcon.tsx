import React, { FC, memo } from 'react';
import TelevisionGuideSvg from '../svg/television-guide.svg';

export interface ITelevisionGuideIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionGuideIcon: FC<ITelevisionGuideIconProps> = memo(props => {
  return <TelevisionGuideSvg {...props} />;
});
