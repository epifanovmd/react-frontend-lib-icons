import React, { FC, memo } from 'react';
import RecordCircleSvg from '../svg/record-circle.svg';

export interface IRecordCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RecordCircleIcon: FC<IRecordCircleIconProps> = memo(props => {
  return <RecordCircleSvg {...props} />;
});
