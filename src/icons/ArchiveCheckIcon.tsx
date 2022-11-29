import React, { FC, memo } from 'react';
import ArchiveCheckSvg from '../svg/archive-check.svg';

export interface IArchiveCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveCheckIcon: FC<IArchiveCheckIconProps> = memo(props => {
  return <ArchiveCheckSvg {...props} />;
});
