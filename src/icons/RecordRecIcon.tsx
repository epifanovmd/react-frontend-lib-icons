import React, { FC, memo } from 'react';
import RecordRecSvg from '../svg/record-rec.svg';

export interface IRecordRecIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RecordRecIcon: FC<IRecordRecIconProps> = memo(props => {
  return <RecordRecSvg {...props} />;
});
