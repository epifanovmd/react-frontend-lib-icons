import React, { FC, memo } from 'react';
import RecordSvg from '../svg/record.svg';

export interface IRecordIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RecordIcon: FC<IRecordIconProps> = memo(props => {
  return <RecordSvg {...props} />;
});
