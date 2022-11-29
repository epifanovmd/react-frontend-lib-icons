import React, { FC, memo } from 'react';
import FileImageRemoveSvg from '../svg/file-image-remove.svg';

export interface IFileImageRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImageRemoveIcon: FC<IFileImageRemoveIconProps> = memo(props => {
  return <FileImageRemoveSvg {...props} />;
});
