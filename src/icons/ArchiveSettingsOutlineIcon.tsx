import React, { FC, memo } from 'react';
import ArchiveSettingsOutlineSvg from '../svg/archive-settings-outline.svg';

export interface IArchiveSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveSettingsOutlineIcon: FC<IArchiveSettingsOutlineIconProps> = memo(props => {
  return <ArchiveSettingsOutlineSvg {...props} />;
});
