import React, { FC, memo } from 'react';
import DanceBallroomSvg from '../svg/dance-ballroom.svg';

export interface IDanceBallroomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DanceBallroomIcon: FC<IDanceBallroomIconProps> = memo(props => {
  return <DanceBallroomSvg {...props} />;
});
