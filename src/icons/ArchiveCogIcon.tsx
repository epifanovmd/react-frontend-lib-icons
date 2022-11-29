import React, { FC, memo } from 'react';
import ArchiveCogSvg from '../svg/archive-cog.svg';

export interface IArchiveCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveCogIcon: FC<IArchiveCogIconProps> = memo(props => {
  return <ArchiveCogSvg {...props} />;
});
