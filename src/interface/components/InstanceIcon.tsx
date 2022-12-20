import React, { useState } from 'react';
import { Image, ImageProps } from 'voxeliface';

import Patcher from '../../plugins/patcher';
import ImagePreview from './ImagePreview';
import type { Instance } from '../../../voxura';
export type InstanceIconProps = ImageProps & {
    size?: number,
    instance: Instance,
    borderRadius?: number
};
export default Patcher.register(function InstanceIcon({ size = 48, instance, borderRadius = 8, ...props }: InstanceIconProps) {
    const [preview, setPreview] = useState(false);
    return <React.Fragment>
        <Image src={instance.webIcon} onClick={() => setPreview(true)} smoothing={1} background="$secondaryBackground" borderRadius={borderRadius} {...props} css={{
            width: 'fit-content',
            cursor: 'zoom-in',
            height: 'fit-content',
            display: 'block',
            minWidth: size,
            minHeight: size,
            boxShadow: '$buttonShadow',
            
            ...props?.css
        }}/>
        {preview && <ImagePreview src={instance.webIcon} size={192} onClose={() => setPreview(false)}/>}
    </React.Fragment>;
});