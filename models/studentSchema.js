const mongoose = require('mongoose');


const fileSchema = mongoose.Schema({
    name: {
        type: String,
    },
    fileUrl: {
        type: String,
    },
    certificateType: {
        type: String,
    },
    semister: {
        type: String,
    },
    semPercentage: {
        type: String,
    },
    backlogs: {
        type: String,
    }
})

const filemodel = mongoose.model('fileSchema', fileSchema);

    
const attendanceSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Leave'],
        default: 'Absent',
        required: true,
    },
    remarks: {
        type: String,
    }
});

const StudentSchema = mongoose.Schema({
    pinno: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    emailid: {
        type: String,
        required: true,
    },
    studentmobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    qrCodeUrl: {
        type: String,
    },
    attendance: [attendanceSchema], // Attendance field
}, {
    timestamps: true
});

const product = mongoose.model('Students', StudentSchema);

module.exports = product, filemodel;