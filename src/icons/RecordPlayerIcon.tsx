import React, { FC, memo } from 'react';
import RecordPlayerSvg from '../svg/record-player.svg';

export interface IRecordPlayerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RecordPlayerIcon: FC<IRecordPlayerIconProps> = memo(props => {
  return <RecordPlayerSvg {...props} />;
});
