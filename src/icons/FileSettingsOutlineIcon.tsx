import React, { FC, memo } from 'react';
import FileSettingsOutlineSvg from '../svg/file-settings-outline.svg';

export interface IFileSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSettingsOutlineIcon: FC<IFileSettingsOutlineIconProps> = memo(props => {
  return <FileSettingsOutlineSvg {...props} />;
});
