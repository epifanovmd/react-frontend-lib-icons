import React, { FC, memo } from 'react';
import RecordCircleOutlineSvg from '../svg/record-circle-outline.svg';

export interface IRecordCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RecordCircleOutlineIcon: FC<IRecordCircleOutlineIconProps> = memo(props => {
  return <RecordCircleOutlineSvg {...props} />;
});
